export default function PatternCreator(data) {
  let patternArr = [];
  let pattern = "";

  data.forEach((e) => {
    patternArr.push(e.luck);
  });

  while (patternArr.length > 0) {
    patternArr = patternArr.filter((item) => item !== 0);
    for (let i = 0; i <= patternArr.length - 1; i++) {
      pattern += data[i].shot_id.toString();
      patternArr[i] -= 1;
    }
  }

  while (pattern.length < 33) {
    pattern = pattern.repeat(2);
  }
  
  return pattern;
}
