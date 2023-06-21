# List all db

show dbs

# Switch to a db

use <db-name>

# Show collections of the db

show collections

# Fetch documents

db.<collection>find()
db.<collection>.findOne()

# Insert documents

db.<collection>.insertOne()
db.<collection>.insertMany()

# Update documents

db.<collection>.updateOne()
db.<collection>.updateMany()

# Delete documents

db.<collection>.deleteOne()
db.<collection>.deleteMany()
