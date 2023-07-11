
exports.getDate = getDate;

function getDate(){
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}

exports.getDay = getDay;

function getDay(){
  const today = new Date();

  const options = {
    weekday: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}

//module.exports.----- == exports.-----
