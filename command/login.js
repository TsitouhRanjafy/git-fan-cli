import { fetch_code_d_authentification, fetch_token } from "../github-api/oauth.js";
import inquirer from "inquirer";
import { exec } from "node:child_process";
import chalk from "chalk";
import { set_env } from "../helper/env.access.js";


export default {
    command: 'login',
    description: 'S\'indentifier \n',
    builder: (yargs) => {
        return yargs
    },
    handler: async (argv) => {
        try {
            const code_d_authentification = await fetch_code_d_authentification()
            if (!code_d_authentification) {
                console.info(chalk.hex('#FFA500')(" ✖ Echec de connexion"))
                return
            }
            
            // redirection to navigator
            console.log(chalk.bold("  Votre code d'authentification:") + chalk.green.bold(code_d_authentification.user_code))
            const res = await confirm(`Entrer le code pour vous authentifier, redirection à ${code_d_authentification.verification_uri} ?`, 'redirection');
            if (!res.redirection) {
                console.info(chalk.hex('#FFA500')(' !Authentification annuler'));
                return
            }
            open_url(code_d_authentification.verification_uri);
            let authentified_confirmation = await confirm(`Avez-vous entrer le code ci-dessus`,'authentifier');
            while (!authentified_confirmation.authentifier) {
                console.log(chalk.hex('#FFA500')('  !Entrer le code s\'il vous plait'))
                open_url(code_d_authentification.verification_uri);
                authentified_confirmation = await confirm(`Avez-vous entrer le code ci-dessus`,'authentifier')
            }

            // handle token
            const token = await fetch_token(code_d_authentification.device_code)
            if (!token) {
                console.info(chalk.hex('#FFA500')("✖ Echec de connexion"))
                return
            }
            set_env('my_token', token.access_token)
            console.info(chalk.green("✔ Connexion avec succès"))
        } catch (error) {
            console.error(chalk.hex('#FFA500')("  !Internal error, cmd: connexion "));
            return;
        }
    },
    middleware: undefined
}


async function confirm(question, name, d = false) {
    return await inquirer.prompt([
                {
                    type: 'confirm',
                    message: question,
                    name: name,
                    default: d
                }
    ])
}

function open_url(url){
    exec(`open ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error`);
            return
        }
    })
}

