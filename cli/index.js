#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import { program } from 'commander';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import figlet from 'figlet'; // Import figlet for ASCII art
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ASCII art function
const printArt = (text) => {
	return new Promise((resolve, reject) => {
		figlet(text, (err, data) => {
			if (err) {
				console.log('Something went wrong with ASCII art generation.');
				console.log(text);
				reject(err); // Rejecting the Promise in case of an error
				return;
			}
			console.log(chalk.blue('\n' + data)); // Adding a line break before the ASCII art
			resolve(); // Resolving the Promise when the art is printed
		});
	});
};


const setupProject = async () => {
	// Display start ASCII art
	for (let i = 0; i < 10; i++) {
		console.log('\n')
	}

	await printArt("Tzazars CLI");
	try {
		const { componentPath, components } = await inquirer.prompt([
			{
				type: 'input',
				name: 'componentPath',
				message: 'Where do you want to place components',
				default: './src/lib/components/tzezars-enhancements',
			},
			{
				type: 'checkbox', // Changed from 'list' to 'checkbox' for multiple selection
				name: 'components',
				message: 'Select components to install (use space to select multiple)',
				shortcuts: true,
				choices: [
					'avatar-group',
					'code-block',
					'code-preview',
					'code-snippet',
					'copy-button',
					'file-dropzone',
					'link',
					'password-input',
					'scroll-progress-indicator',
					'transfer-list'
				],
				validate: (answer) => {
					if (answer.length < 1) {
						return 'You must choose at least one component.';
					}
					return true;
				}
			},
		]);

		for (const component of components) {
			const sourcePath = path.join(__dirname, `/tzezars-enhancements/${component}`);
			const destPath = path.resolve(componentPath, component);

			// Check if component directory already exists
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
					console.log(`Skipping ${component}`);
					continue;
				}

				// If replacing, remove the existing directory first
				if (action === 'replace') {
					await fs.remove(destPath);
				}
			}

			// Copy the component
			await fs.copy(sourcePath, destPath);
			console.log(`Copied ${component} to ${destPath}`);
		}

		console.log(chalk.green('Installation completed!'));

	} catch (err) {
		console.error('Error:', err);
		process.exit(1); // Exit with error code
	}
}

program
	.version('1.0.0')
	.description("CLI to install Shadcn-Svelte Tzezar's Enhancements");

program
	.command('init')
	.description('Install Shadcn-Svelte Tzezar\'s Enhancements')
	.action(setupProject);

program.parse(process.argv);
