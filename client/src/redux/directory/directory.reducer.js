const getImageUrl = (imageName) =>
  "https://firebasestorage.googleapis.com/v0/b/crown-clothing-u03c9.appspot.com/o/images%2F" +
  imageName +
  ".webp?alt=media";

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: getImageUrl("hats"),
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: getImageUrl("jackets"),
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: getImageUrl("sneakers"),
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: getImageUrl("womens"),
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: getImageUrl("mens"),
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

console.log(INITIAL_STATE);

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
