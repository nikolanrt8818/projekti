const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')


program.version('1.0.0').description('Simple Password Generator')

//Dodavanje konzolnih opcija
program
  .option('-l, --length <number>', 'length of password','8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const {length, save, numbers, symbols} = program.opts()


//Funkcija za generisanje sifre
const generatedPassword = createPassword(length,numbers,symbols)


//Cuvanje
if(save) {
    savePassword(generatedPassword)
}

//Kopiranje na clipboard
clipboardy.writeSync(generatedPassword)

//Output
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
console.log(chalk.yellow('Copied to Clipboard.'));