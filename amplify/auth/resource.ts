import { a, defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
const schema = a.schema({
  BucketItem: a.model({
    title: a.string(),
    description: a.string(),
    image: a.string(),
  })
  .authorization((allow) => [allow.owner()]), //only owner can access rn
})
export const auth = defineAuth({
  loginWith: {
    email: true,
  }
})