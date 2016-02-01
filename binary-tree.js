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
		
		var test = 1;
		var tmp = this.root;

		while (test==1)
		{
			if (data<tmp.data)
				if (tmp.left==null)
				{	
					tmp.left = new Node(data, null, null);
					test = 0;

				}
				else tmp=tmp.left;
			else 
				if (tmp.right==null)
				{
					tmp.right = new Node(data, null, null);
					test = 0;
				}
				else tmp=tmp.right;

		}
	}

	contains(data) {
		
		
		var test = 1;
		var tmp = this.root;

		while (test==1 && tmp!=null)
		{	if (tmp.data == data)
				return true;
			if (data<tmp.data)
				tmp=tmp.left;
			else tmp=tmp.right;
			
		}
		return false;
	}

	remove(data) {
		var test = 1;
		var ptmp = null;
		var tmp = this.root;

		if (tmp.data == data)
			{
				this.root=null;
				return true;
			}
		ptmp=tmp;
			if (data<tmp.data)
				tmp=tmp.left;
			else tmp=tmp.right;

		while (test==1 && tmp!=null)
		{	if (tmp.data == data)
				
			{if (tmp.left==null && tmp.right==null)
				{
					if (data<ptmp.data)
					ptmp.left=null;
					else ptmp.right=null;
					return true;
				}

				if (tmp.left!=null && tmp.right==null)
				{
					if (data<ptmp.data)
					ptmp.left=tmp.left;
					else ptmp.right=tmp.left;
					return true;
				}
				if (tmp.left==null && tmp.right!=null)
				{
					if (data<ptmp.data)
					ptmp.left=tmp.right;
					else ptmp.right=tmp.right;
					return true;
				}
				if (tmp.left!=null && tmp.right!=null)
				{
					if (tmp.right.left==null)
						tmp.right.left=tmp.left;
					

					if (data<ptmp.data)
					ptmp.left=tmp.tmp.right;
					else ptmp.right=tmp.right;
					return true;
				}
			}
			ptmp=tmp;
			if (data<tmp.data)
				tmp=tmp.left;
			else tmp=tmp.right;
			
		}
		return false;
	}

	size() {
		
		var tmp = this.root;
		if(tmp == null)
			return 0;
		return this.children(tmp)+1;
	}

	children(tmp) {
		var length = 0;
		if(tmp != null) {

			if (tmp.left != null) {
				length++;
				length += this.children(tmp.left);
			}

			if (tmp.right != null) {
				length++;
				length += this.children(tmp.right);
			}
		}

		return length;

	}

	isEmpty() {
		var tmp = this.root;
		if(tmp == null)
			return true;
		else return false;
		
	}
}
