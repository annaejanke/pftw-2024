import { GridSmall } from "../components/GridSmall";
import { GridLarge } from "../components/GridLarge";
import { HeroHeader } from "../components/HeroHeader";

export function Home({data}) {
    return (
        <>
        <HeroHeader />
        <GridSmall />

        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center mb-16">
            <span className="bg-white px-3 font-semibold text-gray-900 inline-block text-3xl font-extrabold text-slate-900 tracking-tight">
            Latest Projects
            </span>
            </div>
        </div>
        <GridLarge portfolio={data}/>
        </>
    )
}