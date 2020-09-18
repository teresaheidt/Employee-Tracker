const inquirer = require('inquirer');
const DB = require('./db/DB');
require('dotenv').config();
const { printTable } = require('console-table-printer');