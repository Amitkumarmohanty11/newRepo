package inheritance;

public class Dog extends Animal{
	public void noise() {
		System.out.println("Bow Bow");
	}
	public static void main(String[] args) {
		Dog d=new Dog();
		d.sleep();
		d.eat();
		d.noise();
	}

}
