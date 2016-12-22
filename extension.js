/**
 * Lit-it  : Add character to your JSDocs
 * Author  : Mohseen Mukaddam [mohseenmukaddam6@gmail.com]
 * License : Apache 2.0
 */
const vscode = require ('vscode' );
const Range = vscode.Range;
const Position = vscode.Position;
const TextEdit = vscode.TextEdit;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "Lit-it" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        
        // doc reference
        // https://code.visualstudio.com/Docs/extensionAPI/vscode-api#Range
        // https://code.visualstudio.com/Docs/extensionAPI/vscode-api
        const editor = vscode.window.activeTextEditor;
        // const currentText =vscode.window.activeTextEditor.currentText;

        if( editor.selection.isEmpty ){
            const position = editor.selection.active;
            console.log( position );
            //test case if line is 1;
            //get below line
            const requiredRange = new Range( ( position.line + 1 ), 0, ( position.line + 2 ), 0 );

            const textOfInterest = editor.document.getText( requiredRange );
            console.log( textOfInterest );
            //insert this at current position
            const insertionText = new TextEdit( new Range( ( position.line ), 0, ( position.line + 1 ), 0 ), "Custom String inserted\n" );

            var workSpaceEdit = new vscode.WorkspaceEdit();
            workSpaceEdit.set( editor.document.uri, [ insertionText ] );

            // console.log(functionDocString(''));

            vscode.workspace.applyEdit( workSpaceEdit );
        }
        else
            vscode.window.showInformationMessage( 'Lit-it does not work with selection' );
        // vscode.window.showInformationMessage(currentText.getText());

    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//file signature
const checkSignature = ( signature ) => {
    if( signature.includes( 'function' ) )
        return 'FUNCTION';
    return 'ES6';
}
/**
 * Reduces a sequence of names to initials.
 * @function makeInits
 * @memberOf Helper.
 * @param  {String} name  Space Delimited sequence of names.
 * @param  {String} sep   A period separating the initials.
 * @param  {String} trail A period ending the initials.
 * @param  {String} hyph  A hypen separating double names.
 * @return {String}       Properly formatted initials.
 */
/**
 * @author Mohseen Mukaddam <mohseenmukaddam6@gmail.com>
 */
const functionDocString = ( signature ) => {
    let template = ``;
    template += `/**\n* @function `;
    //get index of function add 8
    //search for name 
    // for(i = 0; i < 10; i++)
    //     template += `${i+1}\n`;
    let currentPosition = signature.indexOf( 'function' );
    if( currentPosition === -1 )
        template += `{function name}\n`;
    else{
        currentPosition += 8;
        const endSlicePosition = signature.indexOf( '(' );
    
        const name = signature.slice( currentPosition, endSlicePosition ).trim();
        template += `${(name === '') ? `{function name}\n` : `${name}\n`}`;
    }

    const parameters = extractParameters( signature );

    if( parameters === 0 ){
        template += `* @return {type} \t {description}\n*/`;
        return template;
    }
    else{
        let parameterString = parameters.map( param => `* @param  {type} ${param} {description}\n` );
        parameterString = parameterString.reduce( ( acc, curr ) => acc.concat( curr ) );
        parameterString += `* @return {type}  {description}\n*/`;
        return( template.concat( parameterString ) );
    }
};
exports.functionDocString = functionDocString;

const extractParameters = ( signature ) => {
    const possibleParameters = signature.slice( signature.indexOf( '(' ) + 1, signature.indexOf( ')' ) ).trim();
    return (possibleParameters === '') ? [] : possibleParameters.split( ',' ).map( str => str.trim() );
};
exports.extractParameters = extractParameters;

const prettyParameters = ( listOfParameters ) => {
    return [];
};
exports.prettyParameters = prettyParameters;
exports.checkSignature = checkSignature;