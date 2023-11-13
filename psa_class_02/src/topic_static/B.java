package topic_static;

// We can access static variable 3way

public class B {
	
static int x = 100;
	
	public static void main(String[] args) {
		
		//Correct
		System.out.println(A.x);//100 (1 way)
		
		System.out.println(x);//100  (2 way)
		
		B b1 = new B();
		
		System.out.println(b1.x);// B.x  o/p = 100 (3 way)
		
		
	}

}
