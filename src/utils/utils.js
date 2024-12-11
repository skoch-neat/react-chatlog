export const toggleLike = (likes, id, liked) => {
  return liked ? [...likes, id] : likes.filter(likeId => likeId !== id);
};