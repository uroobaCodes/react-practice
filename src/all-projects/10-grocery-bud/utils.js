function uniqueId() {
  let random = Math.random();
  //   console.log(random);

  // const str = random.toString(16)
  const str = random.toString(36);
  //   console.log(str);

  const Id = str.substring(2, 7);
  //   console.log(Id);
  return Id;
}

export default uniqueId;

// new Date().getTime.toString();
//  this is what john smilga is using
