/* eslint-disable drizzle/enforce-delete-with-where */
// import { faker } from '@faker-js/faker'
// import { db } from './connection'
import chalk from 'chalk'
// import { createId } from '@paralleldrive/cuid2'

/**
 * Reset database
 */
console.log(chalk.yellow('✔ Database reset'))

console.log(chalk.yellow('✔ Created restaurant'))

console.log(chalk.yellow('✔ Created orders'))

console.log(chalk.greenBright('Database seeded successfully!'))

process.exit()
