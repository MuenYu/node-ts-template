import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const require = createRequire(import.meta.url);
const prettierBin = require.resolve('prettier/bin/prettier.cjs');

type Mode = 'check' | 'write';

const cli = yargs(hideBin(process.argv))
	.command(['check', '$0'], 'check repo code formatting')
	.command('write', 'format repository')
	.strictCommands()
	.demandCommand(1)
	.help(false)
	.version(false);

const args = cli.parseSync();
const mode = (typeof args._[0] === 'string' ? args._[0] : 'check') as Mode;

await runPrettier(mode);

async function runPrettier(mode: Mode) {
	const baseArgs = [prettierBin, '--cache', '--cache-location', '.cache/prettier', '--config', '.prettierrc.json'];
	const actionArgs = mode === 'check' ? ['--check', '.'] : ['--write', '.'];

	await runProcess(process.execPath, [...baseArgs, ...actionArgs]);
}

function runProcess(command: string, args: string[]): Promise<void> {
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, { stdio: 'inherit' });

		child.on('close', (code) => {
			if (code === 0) {
				resolve();
			} else {
				reject(new Error(`${command} exited with code ${code ?? 'null'}`));
			}
		});

		child.on('error', (error) => {
			reject(error);
		});
	});
}
