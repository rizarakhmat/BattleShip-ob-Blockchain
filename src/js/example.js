let boardSize = 2;
var row = 2;
var col = 1;

function getHash (row, col) {
  var targetIndex = row * boardSize + col;

  console.log(merkleTree);
  console.log(merkleTree[0][targetIndex]);
}

function createMerkleProof (row, col) {
  const merkleProof = [];
  let flatIndex = (row * boardSize) + col;
  console.log(flatIndex);

  // select the right node (siblings of the node to verify)
  for (let i = 0; i < (merkleTree.length - 1); i++) {
    if (flatIndex % 2 == 0) {
      merkleProof.push(merkleTree[i][flatIndex + 1]);
      flatIndex = flatIndex / 2;
    }
    else {
      merkleProof.push(merkleTree[i][flatIndex - 1]);
      flatIndex = (flatIndex - 1) / 2;
    }
  }

  console.log(merkleProof);
}