import Card from "./Card";
import Header from "./Header";
import InfoCard from "./InfoCard";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="xl:flex h-[85%] gap-16 2xl:flex-col ">
        <Card />
        <div className="flex flex-wrap items-center justify-center ">
         <InfoCard Head={'Deposit'} Description={'bank is a bank used towithdrow money'} Button={'Deposit'} path={'/deposit'} /> 
         <InfoCard Head={'Withdraw'} Description={'bank is a bank used towithdrow money'} Button={'Withdraw'} path={'/withdraw'}/> 
         <InfoCard Head={'Balance'} Description={'bank is a bank used towithdrow money'} Button={'Balance'} path={'/balance'}/> 
         <InfoCard Head={'History'} Description={'bank is a bank used towithdrow money'} Button={'History'} path={"/history"}/> 
        </div>
      </div>
    </div>
  );
}

export default Home;
