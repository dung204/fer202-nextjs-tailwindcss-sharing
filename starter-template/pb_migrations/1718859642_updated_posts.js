/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmekz94tx8a3oqi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axh2nfbf",
    "name": "coverImageUrl",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmekz94tx8a3oqi")

  // remove
  collection.schema.removeField("axh2nfbf")

  return dao.saveCollection(collection)
})
