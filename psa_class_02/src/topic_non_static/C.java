package topic_non_static;

public class C {
	
	int x= 10;
	public static void main(String[] args) {
		C c1 = new C();
		System.out.println(c1.x);
		
		C c2 = new C();
		System.out.println(c2.x);
	}

}
//o/p == 

//10
//10

