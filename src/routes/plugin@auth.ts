import { serverAuth$ } from '@builder.io/qwik-auth';
import GitHub from '@auth/core/providers/github';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(
  ({ env }) => ({
    secret: env.get('AUTH_SECRET'),
    trustHost: true,
    providers: [
      GitHub({
        clientId: env.get('GITHUB_ID')!,
        clientSecret: env.get('GITHUB_SECRET')!,
      }),
    ],
  })
);
