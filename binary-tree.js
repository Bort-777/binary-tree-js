'use strict';

class BinaryTree {

	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.root == null)
			{
				this.root = new Node(data, null, null);
				return;
			}
		if ( this.contains(data) === false ) {	
			var isFound = false;
			var iter = this.root;
			while (isFound === false)
			{
				if (data<iter.data)
					if (iter.left === null)
					{	
						iter.left = new Node(data, null, null);
						isFound = true;

					}
					else iter=iter.left;
				else 
					if (iter.right === null)
					{
						iter.right = new Node(data, null, null);
						isFound = true;
					}
					else iter = iter.right;
			}
		}
	}

	contains(data) {	
		var iter = this.root;
		while (iter!=null) {
			if (iter.data == data)
				return true;
			else if (data<iter.data)
					iter=iter.left;
				else iter=iter.right;
		}
		return false;
	}

	remove(data) {
		var test = 1;
		var iter = this.root;
		var parent = null;

		if (iter.data == data)
			{
				this.root=null;
				return true;
			}
		parent=iter;
			if (data<iter.data)
				iter=iter.left;
			else iter=iter.right;

		while (test==1 && iter!=null)
		{	if (iter.data == data)
				
			{if (iter.left==null && iter.right==null)
				{
					if (data<parent.data)
					parent.left=null;
					else parent.right=null;
					return true;
				}

				if (iter.left!=null && iter.right==null)
				{
					if (data<parent.data)
					parent.left=iter.left;
					else parent.right=iter.left;
					return true;
				}
				if (iter.left==null && iter.right!=null)
				{
					if (data<parent.data)
					parent.left=iter.right;
					else parent.right=iter.right;
					return true;
				}
				if (iter.left!=null && iter.right!=null)
				{
					if (iter.right.left==null)
						iter.right.left=iter.left;
					

					if (data<parent.data)
					parent.left=iter.iter.right;
					else parent.right=iter.right;
					return true;
				}
			}
			parent=iter;
			if (data<iter.data)
				iter=iter.left;
			else iter=iter.right;
			
		}
		return false;
	}

	size() {	
		var nood = this.root;
		if(nood == null)
			return 0;
		return this.childrenSize(nood)+1;
	}

	childrenSize(nood) {
		var length = 0;
		if(nood !== null) {
			if (nood.left !== null) {
				length++;
				length += this.childrenSize(nood.left);
			}
			if (nood.right !== null) {
				length++;
				length += this.childrenSize(nood.right);
			}
		}
		return length;
	}

	isEmpty() {
		var nood = this.root;
		if(nood === null)
			return true;
		else return false;
		
	}
}
