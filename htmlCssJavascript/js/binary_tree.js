//二叉树
function BinaryTree() {
    
    // 节点结构
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	};

    //根节点
	var root = null;

    //新增节点
    var insertNode = function(node,newNode){
    	//约定右孩子都大于左孩子节点
    	if(newNode.key<node.key){
    		if(node.left === null){//没有左孩子，则新增左孩子
    			node.left = newNode;
    		}else{
    			//如果有左孩子则递归算法实现插入左孩子节点
    			insertNode(node.left,newNode);
    		}
    	}else {
    		//如果有孩子为null，则新增右孩子
    		if(node.right===null){
    			node.right = newNode;
    		}else{
    			//如果有左孩子则递归算法实现插入右孩子节点
    			insertNode(node.right,newNode);
    		}
    	}
    };
    // 插入新节点
	this.insert =function(key){
		//创建节点
       var node = new Node(key);
       if(root === null){//判断是否为根节点
       	 root = node;
       }else {
       	// 不是根节点则新增节点
       	 insertNode(root,node);
       }
       console.log(root);
    };
}

//构建二叉树
var nodes = [6,2,3,4,9,8,7,22,1,12];
// var nodes = [1,2,3,4,5,6,7,8,9,10,11];
var binaryTree = new BinaryTree();
nodes.forEach(function(key){
    binaryTree.insert(key);
});
// console.log(binaryTree);


// let BinaryTree = function(key){
//     let tNode = function(key){
//         this.key = key;
//         this.left =null;
//         this.right = null;
//     }

//     let root = null; 
//     let insertNode = function(node, newNode){
//         if( node.left == null ){
//             node.left = newNode
//         }else if( node.right == null ){
//             node.right = newNode;
//         }else{}
//         // if( newNode.key < node.key ){
//         //     if( node.left == null ){
//         //         node.left = newNode
//         //     }else{
//         //         insertNode(node.left , newNode)
//         //     }
//         // }else{
//         //     if( node.right == null ){
//         //         node.right = newNode;
//         //     }else{
//         //         insertNode(node.right , newNode)
//         //     }
//         // }
//         console.log(node);
//     }

//     this.insert = function(key){
//         let newNode = new tNode(key);
//         if(root === null){
//             root = newNode;
//         }else{
//             insertNode(root, newNode);
//         }
//     }
// }
// let node = [1,2,3,4,5,6,7,8];
// let binaryTree = new BinaryTree();
// node.forEach((key)=>{
//     binaryTree.insert(key)
// })

// var BinaryTree = function(){
//     var Node = function(key){
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }

//     var rootNode = null;

//     var insertNode = function(node , newNode){
//         if( newNode.key < node.key ){
//             if( node.left == null ){
//                 node.left = newNode
//             }else{
//                 insertNode(node.left , newNode)
//             }
//         }else{
//             if( node.right == null ){
//                 node.right = newNode;
//             }else{
//                 insertNode(node.right , newNode)
//             }
//         }
//         console.log(rootNode);
//     }

//     this.insert = function(key){
//         var newNode = new Node(key);
//         if( rootNode == null ){
//             rootNode = newNode;
//         }else{
//             insertNode(rootNode , newNode);
//         }
//     }
// }

// var nodes = [8,3,10,1,6,14,4,7,13];
// var binaryTree = new BinaryTree();
// nodes.forEach(function(key){
//     binaryTree.insert(key)
// })


// let countNodes = function(root) {
//     if(root==null)  return 0;
//     return countNodes(root.left)+countNodes(root.right)+1;
// };

// console.log(countNodes([1,2,3,4,5,6,7,8]));