/**
 * Shiki Syntax Highlighter Configuration
 * 
 * This module sets up a fine-grained Shiki syntax highlighter following the
 * performance best practices documented at https://shiki.matsu.io/guide/best-performance
 * 
 * Key optimizations implemented:
 * - Uses fine-grained imports instead of full bundle to reduce size
 * - Implements a singleton pattern with a reusable highlighter instance
 * - Uses the JavaScript regex engine instead of Oniguruma for better web performance
 * - Only imports required languages to minimize bundle size
 */

import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { createHighlighterCore } from 'shiki/core';

/**
 * Map of supported languages with their dynamic imports
 * This allows for code-splitting and only loading languages when needed
 */
const bundledLanguages = {
	bash: () => import('@shikijs/langs/bash'),
	diff: () => import('@shikijs/langs/diff'),
	javascript: () => import('@shikijs/langs/javascript'),
	json: () => import('@shikijs/langs/json'),
	svelte: () => import('@shikijs/langs/svelte'),
	typescript: () => import('@shikijs/langs/typescript')
};

/** Type definition for the languages configured for the highlighter */
export type SupportedLanguage = keyof typeof bundledLanguages;

/**
 * A preloaded singleton highlighter instance.
 * 
 * This instance is created once and reused for all highlighting operations.
 * When no longer needed, call highlighter.dispose() to release resources.
 * 
 * Performance notes:
 * - Creates the highlighter once to avoid expensive initialization costs
 * - Only imports required themes (GitHub light/dark)
 * - Uses JavaScript regex engine instead of Oniguruma for better performance on web
 */
export const highlighter = createHighlighterCore({
	themes: [
		import('@shikijs/themes/github-light-default'),
		import('@shikijs/themes/github-dark-default')
	],
	langs: Object.entries(bundledLanguages).map(([_, lang]) => lang),
	engine: createJavaScriptRegexEngine()
});