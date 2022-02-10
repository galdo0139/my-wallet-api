import { connection } from '../../config/databaseConnection';

const databaseHelper = {
    async clearTable(tableName) {
        await connection.query(`delete from ${tableName}`);
    },

    async clearAllTables(tables) {
        await tables.forEach(async (table) => {
            await this.clearTable(table);
        });
    },
};

export default databaseHelper;
