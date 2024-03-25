import AboutUs from "@/components/AboutUs";

export default function Aboutus(){
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-4xl mt-5">Contact Us</div>
            <div className="items-center">
                <AboutUs github="Pariodus" discord="Pariodus"/>
                <AboutUs github="Nisha11045" discord="AaRaiWaa"/>
                <AboutUs github="Nitchakan04" discord="N"/>
            </div>
            
        </main>
    )
}