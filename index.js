
function findMatching(names, filter) {
  return names.filter(function (val) {
    return val.toLowerCase() === filter.toLowerCase();
  });
}

function fuzzyMatch(names, filter) {
  return names.filter(function (val) {
    return val.startsWith(filter);
  });
}

function matchName(names, filter) {
  return names.filter(function (driver) {
    return driver.name === filter;
  });
}
