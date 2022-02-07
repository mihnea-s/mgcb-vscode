import * as vscode from 'vscode';
import * as process from 'child_process';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('_mgcb.openInExternalEditor', () => {

		let toolPath = vscode.workspace.getConfiguration().get<string>("mgcb.executablePath");
		let activeTextEditor = vscode.window.activeTextEditor;

		if (activeTextEditor && toolPath) {
			process.exec(`"${toolPath}" "${activeTextEditor.document.uri.fsPath}"`);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
