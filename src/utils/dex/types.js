const { typeName } = require('../../../__3.0gamedata');

function getTypeName(typeId = 0) {
  const type = typeName.labelDataArray[typeId]?.wordDataArray[0]?.str;
  if (!type) throw Error(`Bad typeId: ${typeId}`);
  return type;
}

function getTypes(pokemonObject) {
  return pokemonObject.type1 === pokemonObject.type2
    ? [getTypeName(pokemonObject.type1)]
    : [getTypeName(pokemonObject.type1), getTypeName(pokemonObject.type2)];
}

export { getTypeName, getTypes };
