function gethash() {
  return location.hash.split("/")[1];
}

export default gethash;