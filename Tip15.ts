type Action =
  | {
      type: 'LOGIN';
      payload: {
        userId: string;
      };
    }
  | {
      type: 'LOGOUT';
    };

const signAction = <T extends Action['type']>(
  ...args: Extract<Action, { type: T }> extends { payload: infer R }
    ? [T, R]
    : [T]
) => {
  switch (args[0]) {
    case 'LOGIN':
      // console.log(args[1]);
      break;
    case 'LOGOUT':
      //
      break;
    default:
      break;
  }
};

signAction('LOGOUT');
signAction('LOGIN', {
  userId: 'uuid',
});
