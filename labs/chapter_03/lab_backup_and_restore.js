// NOTE: this script cannot be executed as is
//       it is only intended to show the sequence of commands you will run in the lab

// $ xxx  --> command "xxx" issued from the command line 
// > xxx  --> command "xxx" issued from the mongo shell


// from a command prompt (or terminal window) enter the mongo shell
$ mongo

// and do a count of the sweetscomplete.products collection
>use sweetscomplete;
>db.products.count();

// exit the shell
exit

// backup the sweetscomplete.products collection
$ mongodump --db=sweetscomplete --collection=products

// enter the shell and drop the collection
$ mongo
>use sweetscomplete;
>db.products.drop();

// confirm the collection has been dropped
>show collections

// exit the shell
exit

// restore the sweetscomplete.products collection
$ mongorestore --nsInclude sweetscomplete.products

// enter the shell and drop the collection and do a count of the sweetscomplete.products collection
$ mongo
>use sweetscomplete;
>db.products.count();

// make sure the counts match
 
