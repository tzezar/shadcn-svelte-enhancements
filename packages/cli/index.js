#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import { program } from 'commander';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import figlet from 'figlet';
import chalk from 'chalk';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Separate hook configuration
const hooksConfig = {
	'use-clipboard': {
		filename: 'use-clipboard.svelte.ts',
		description: 'Hook for clipboard operations',
		requiredBy: ['copy-button']
	},
	// 'use-scroll': {
	// 	filename: 'use-scroll.svelte.ts',
	// 	description: 'Hook for scroll position tracking',
	// 	requiredBy: ['scroll-progress-indicator']
	// },
	// 'use-viewport': {
	// 	filename: 'use-viewport.svelte.ts',
	// 	description: 'Hook for viewport intersection detection',
	// 	requiredBy: []
	// },
	// 'use-media-query': {
	// 	filename: 'use-media-query.svelte.ts',
	// 	description: 'Hook for responsive media queries',
	// 	requiredBy: []
	// }
};

// Component dependency configuration
const componentConfig = {
	'code-block': {
		dependencies: ['isomorphic-dompurify', 'shiki'],
		devDependencies: ['shiki'],
		requires: ['copy-button'],
		requiredHooks: []
	},
	'code-preview': {
		requires: ['code-block'],
		requiredHooks: []
	},
	'copy-button': {
		requires: [],
		requiredHooks: ['use-clipboard']
	},
	'code-snippet': {
		requires: ['copy-button'],
		requiredHooks: []
	},
	'scroll-progress-indicator': {
		requires: [],
		requiredHooks: ['use-scroll']
	},
	'avatar-group': {
		requires: [],
		requiredHooks: []
	},
	'file-dropzone': {
		requires: [],
		requiredHooks: []
	},
	'link': {
		requires: [],
		requiredHooks: []
	},
	'password-input': {
		requires: [],
		requiredHooks: []
	},
	'transfer-list': {
		requires: [],
		requiredHooks: []
	}
};

// Rest of the helper functions remain the same...
const printArt = (text) => {
	return new Promise((resolve, reject) => {
		figlet(text, (err, data) => {
			if (err) {
				console.log('Something went wrong with ASCII art generation.');
				console.log(text);
				reject(err);
				return;
			}
			console.log(chalk.blue('\n' + data));
			resolve();
		});
	});
};

const installDependencies = async (deps = [], dev = false) => {
	if (deps.length === 0) return;

	try {
		console.log(chalk.yellow(`\nInstalling ${dev ? 'dev ' : ''}dependencies...`));

		for (const dep of deps) {
			const command = `npm install ${dev ? '-D ' : ''}${dep}`;
			console.log(chalk.yellow(`Installing ${dep}...`));
			await execAsync(command);
			console.log(chalk.green(`Successfully installed ${dep}`));
		}

		console.log(chalk.green(`All ${dev ? 'dev ' : ''}dependencies installed successfully!`));
	} catch (error) {
		console.error(chalk.red(`Failed to install dependencies: ${error.message}`));
		throw error;
	}
};

// Updated copyHooks function to handle hook configs
async function copyHooks(hooks = [], componentPath) {
	if (hooks.length === 0) return;

	const hooksPath = path.join(path.resolve(componentPath, '../../hooks'));

	for (const hookId of hooks) {
		const hook = hooksConfig[hookId];
		if (!hook) continue;

		const sourcePath = path.join(__dirname, 'tzezars-enhancements/hooks', hook.filename);
		const destPath = path.join(hooksPath, hook.filename);

		await fs.ensureDir(hooksPath);

		try {
			await fs.copy(sourcePath, destPath);
			console.log(chalk.green(`Copied hook: ${hook.filename} to ${destPath}`));
		} catch (error) {
			console.error(chalk.red(`Failed to copy hook ${hook.filename}: ${error.message}`));
			throw error;
		}
	}
}

function getAllRequiredComponents(component, visited = new Set()) {
	if (visited.has(component)) return { components: [], hooks: [] };
	visited.add(component);

	const config = componentConfig[component];
	if (!config) return { components: [], hooks: [] };

	const components = [...(config.requires || [])];
	const hooks = [...(config.requiredHooks || [])];

	// Recursively get requirements from dependencies
	for (const req of config.requires || []) {
		const nested = getAllRequiredComponents(req, visited);
		components.push(...nested.components);
		hooks.push(...nested.hooks);
	}

	return { components, hooks };
}


// New function to get required hooks for components
function getRequiredHooks(components) {
	const requiredHooks = new Set();

	components.forEach(component => {
		const config = componentConfig[component];
		if (config && config.requiredHooks) {
			config.requiredHooks.forEach(hook => requiredHooks.add(hook));
		}
	});

	return Array.from(requiredHooks);
}

function getAllDependencies(components) {
	const deps = new Set();
	const devDeps = new Set();
	const requiredComponents = new Set(components);
	const requiredHooks = new Set();

	// Process each component and its dependencies
	const processComponent = (component) => {
		const { components: required, hooks } = getAllRequiredComponents(component);
		required.forEach(req => requiredComponents.add(req));
		hooks.forEach(hook => requiredHooks.add(hook));

		// Also add hooks from the component itself
		const config = componentConfig[component];
		if (config && config.requiredHooks) {
			config.requiredHooks.forEach(hook => requiredHooks.add(hook));
		}
	};

	// Process all selected components
	components.forEach(processComponent);

	// Get dependencies from all required components
	requiredComponents.forEach(component => {
		const config = componentConfig[component];
		if (config) {
			if (config.dependencies) {
				config.dependencies.forEach(dep => deps.add(dep));
			}
			if (config.devDependencies) {
				config.devDependencies.forEach(dep => devDeps.add(dep));
			}
		}
	});

	return {
		dependencies: Array.from(deps),
		devDependencies: Array.from(devDeps),
		requiredComponents: Array.from(requiredComponents),
		requiredHooks: Array.from(requiredHooks)
	};
}

const setupProject = async () => {
	// Clear screen and show banner
	for (let i = 0; i < 10; i++) {
		console.log('\n');
	}

	await printArt("Tzazars CLI");

	try {
		// Step 1: Get component path
		const { componentPath } = await inquirer.prompt([
			{
				type: 'input',
				name: 'componentPath',
				message: 'Where do you want to place components',
				default: './src/lib/components/tzezars-enhancements',
			}
		]);

		const { components } = await inquirer.prompt([
			{
				type: 'checkbox',
				name: 'components',
				message: 'Select components to install (use space to select multiple)',
				choices: Object.keys(componentConfig),
				validate: (answer) => {
					if (answer.length < 1) {
						return 'You must choose at least one component.';
					}
					return true;
				}
			}
		]);

		// Get all dependencies, components, and hooks
		const { dependencies, devDependencies, requiredComponents, requiredHooks } = getAllDependencies(components);

		// Step 3: Select additional hooks with required ones pre-selected
		const { additionalHooks } = await inquirer.prompt([
			{
				type: 'checkbox',
				name: 'additionalHooks',
				message: 'Select additional hooks to install (required hooks are automatically included)',
				choices: Object.entries(hooksConfig).map(([id, hook]) => ({
					name: `${hook.filename} - ${hook.description}`,
					value: id,
					checked: requiredHooks.includes(id),
					disabled: requiredHooks.includes(id) ? '(required by: ' +
						hook.requiredBy.filter(comp => requiredComponents.includes(comp)).join(', ') +
						')' : false
				}))
			}
		]);

		// Combine required and additional hooks
		const allHooks = [...new Set([...requiredHooks, ...additionalHooks])];

		// Show installation summary
		console.log(chalk.cyan('\nInstallation Summary:'));
		console.log(chalk.white('Components to install:'), chalk.yellow(requiredComponents.join(', ')));
		if (dependencies.length) console.log(chalk.white('Dependencies to install:'), chalk.yellow(dependencies.join(', ')));
		if (devDependencies.length) console.log(chalk.white('Dev dependencies to install:'), chalk.yellow(devDependencies.join(', ')));
		console.log(chalk.white('Hooks to install:'), chalk.yellow(allHooks.map(h => hooksConfig[h].filename).join(', ')));

		const { confirm } = await inquirer.prompt([
			{
				type: 'confirm',
				name: 'confirm',
				message: 'Do you want to proceed with the installation?',
				default: true
			}
		]);

		if (!confirm) {
			console.log(chalk.yellow('Installation cancelled'));
			return;
		}

		// Install all components
		for (const component of requiredComponents) {
			const sourcePath = path.join(__dirname, `/tzezars-enhancements/${component}`);
			const destPath = path.resolve(componentPath, component);

			if (await fs.pathExists(destPath)) {
				const { action } = await inquirer.prompt([
					{
						type: 'list',
						name: 'action',
						message: `${component} already exists. What would you like to do?`,
						choices: [
							{ name: 'Replace', value: 'replace' },
							{ name: 'Skip', value: 'skip' }
						]
					}
				]);

				if (action === 'skip') {
					console.log(chalk.yellow(`Skipping ${component}`));
					continue;
				}

				if (action === 'replace') {
					await fs.remove(destPath);
				}
			}

			await fs.copy(sourcePath, destPath);
			console.log(chalk.green(`Copied ${component} to ${destPath}`));
		}

		// Install hooks
		if (allHooks.length > 0) {
			await copyHooks(allHooks, componentPath);
		}

		// Install dependencies
		if (dependencies.length > 0) {
			await installDependencies(dependencies, false);
		}
		if (devDependencies.length > 0) {
			await installDependencies(devDependencies, true);
		}

		console.log(chalk.green('\n✨ Installation completed successfully! ✨'));

	} catch (err) {
		console.error(chalk.red('Error:', err));
		process.exit(1);
	}
};

program
	.version('1.0.0')
	.description("CLI to install Shadcn-Svelte Tzezar's Enhancements");

program
	.command('init')
	.description('Install Shadcn-Svelte Tzezar\'s Enhancements')
	.action(setupProject);

program.parse(process.argv);