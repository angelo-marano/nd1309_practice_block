/**
 * Import crypto-js/SHA256 library
 */
const SHA256 = require('crypto-js/sha256');

/**
 * Class with a constructor for block 
 */
class Block {

	constructor(data){
		this.id = 0;
        this.nonce = 1444441;
      	this.body = data;
      	this.hash = "";
    }
    
    /**
     * Step 1. Implement `generateHash()`
     * method that return the `self` block with the hash.
     * 
     * Create a Promise that resolve with `self` after you create 
     * the hash of the object and assigned to the hash property `self.hash = ...`
     */
  	// 
  	generateHash() {
      	// Use this to create a temporary reference of the class object
      	let self = this;
        const promise = new Promise((res, rej) => {
          const hash = SHA256(JSON.stringify(self)).toString();
          self.hash = hash; 
          res(self);
        })

        return promise;
        
    }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;