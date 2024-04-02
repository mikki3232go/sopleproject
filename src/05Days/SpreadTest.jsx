export default function SpreadTest(){
    //user객체 생성하고 
    const user= {
        id : 1,
        name : '박가이',
    };
    //user객체 복사하고 속성을 추가한 userAdd 객체 만들기
    const userAdd ={
        ...user,
        email : 'abc@gmail.com',

    };
    // userAdd객체 출력
    console.log(userAdd);
    document.write(userAdd.id);
    document.write(userAdd.name);
    document.write(userAdd.email);
    //배열에서 사용하기
    const fruits = ['딸기', '바나나', '복숭아'];
    const fruitsAdd = ['블루베리', ...fruits];
    //fruitsAdd객체 출력
    console.log(fruitsAdd);
    document.write('<br>' + fruitsAdd);
    return (

    <div>

    </div>
        );

}