type Entity = { type: 'user' } | { type: 'post' } | { type: 'comment' };

type _EntityWithId =
  | { type: 'user'; userId: string }
  | { type: 'post'; postId: string }
  | { type: 'comment'; commentId: string };

/*   ↓ Tips Start!!   */
// Entityから_EntityWithIdと同じ型を作るTips
type EntityWithId = {
  [K in Entity['type']]: { type: K } & Record<`${K}Id`, string>;
}[Entity['type']];

const result: EntityWithId = {
  type: 'comment',
  commentId: 'asdf',
};

