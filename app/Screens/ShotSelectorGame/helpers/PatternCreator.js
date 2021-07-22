export default function PatternCreator(data) {
  let patternArr = [];
  let pattern = "";

  data.forEach((e) => {
    patternArr.push([e.shot_id, e.luck]);
  });
  
  while (patternArr.length > 0) {
    patternArr = patternArr.filter((item) => item[1] !== 0);
    for (let i = 0; i <= patternArr.length - 1; i++) {
      pattern += patternArr[i][0].toString();
      patternArr[i][1] -= 1;
    }

  }

  if (pattern.length == 0) {
    pattern = "9999999999999999999999999999999999999999";
  }
  
  while (pattern.length < 33) {
    pattern = pattern.repeat(2);
  }
  
  
  return pattern;
}
