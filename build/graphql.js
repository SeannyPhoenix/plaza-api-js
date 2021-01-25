import { graphqlHTTP } from 'express-graphql';
import fs from 'fs';
import { buildSchema } from 'graphql';
// read the .graphql file and build the schema
const fileSchema = fs.readFileSync(new URL('.graphql', `${import.meta.url}`));
const schema = buildSchema(fileSchema.toString());
const rootValue = {
    login: () => {
        return {
            id: '123',
            account: {
                id: '456',
                name: 'Seanny Phoenix',
            },
        };
    },
};
export const graphqlServer = graphqlHTTP({
    schema,
    rootValue,
});
