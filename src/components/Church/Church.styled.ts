import tw, { styled } from 'twin.macro';

const colorConfigs = {
  red: [tw`bg-red-900 bg-opacity-50 transform scale-105`, tw`hover:bg-red-900 hover:bg-opacity-30`],
  gold: [tw`bg-yellow-800 bg-opacity-50 transform scale-105`, tw`hover:bg-yellow-800 hover:bg-opacity-30`]
}

interface MissionWrapperProps {
  active: boolean;
  basecolor: 'red' | 'gold';
}

export const ChurchWrapper = styled.div`
  ${tw`relative min-h-screen`}
`;

export const HeroSection = styled.div`
  ${tw`relative z-10 pt-8 pb-16 px-4 md:px-12`}
`;

export const SectionTitle = styled.h1`
  ${tw`text-5xl font-bold text-yellow-400 mb-4 tracking-wider text-center`}
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3);
`;

export const SectionSubtitle = styled.p`
  ${tw`text-xl text-gray-300 italic text-center mb-12`}
`;

export const CardContainer = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto`}
`;

export const TemplarCard = styled.div`
  ${tw`bg-neutral-900 bg-opacity-80 border-2 border-red-800 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 p-6`}
`;

export const CardTitle = styled.h2`
  ${tw`text-3xl font-bold text-red-500 mb-6 text-center border-b-2 border-red-800 pb-2`}
`;

export const MissionWrapper = styled.div<MissionWrapperProps>`
  ${tw`p-3 rounded-lg transition-all duration-300 mb-4`}
  ${({active, basecolor}) => active ? colorConfigs[basecolor][0] : colorConfigs[basecolor][1]}
`;

export const ScriptureQuote = styled.div`
  ${tw`italic text-gray-300 text-center my-8 mx-auto max-w-2xl p-6 border-l-4 border-yellow-600`}
`;
