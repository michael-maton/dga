export default function PatternCreator(data) {
  let patternArr = [];
  let pattern = "";

  data.forEach((e) => {
    patternArr.push([e.shot_id, e.luck]);
  });
  // patternArr = patternArr.filter((item) => item[1] !== 0);
  // console.log(patternArr)

  while (patternArr.length > 0) {
    patternArr = patternArr.filter((item) => item[1] !== 0);
    for (let i = 0; i <= patternArr.length - 1; i++) {
      pattern += patternArr[i][0].toString();
      patternArr[i][1] -= 1;
    }
  }

  while (pattern.length < 33) {
    pattern = pattern.repeat(2);
  }
  
  // console.log(pattern)
  return pattern;
}
