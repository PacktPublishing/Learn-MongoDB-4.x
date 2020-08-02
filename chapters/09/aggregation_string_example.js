// NOTE: you can't run this directly: cut and paste into the shell
db.customers.aggregate(
[
    { $project: {
        last : "$name.last",
        full_name: {
            $concat: [
                { $cond : {
                    if: "$name.title",
                    then: { $concat : ["$name.title", " "] },
                    else: "" } },
                "$name.first",
                " ",
                { $cond : {
                    if: "$name.middle",
                    then: { $concat : [{ $toUpper: {$substrCP:["$name.middle",0,1]}}, ". "] },
                    else: "" } },
                "$name.last" ]
        }
    } },
    { $sort : { "last" : 1 } },
    { $project : { "full_name" : 1, "_id" : 0 } }
]);