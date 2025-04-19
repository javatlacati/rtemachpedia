import tw, {styled} from 'twin.macro'

const colorConfigs = {
  blue: [tw`bg-blue-900 bg-opacity-50 transform scale-105`, tw`hover:bg-blue-900 hover:bg-opacity-30`],
  yellow: [tw`bg-yellow-900 bg-opacity-50 transform scale-105`, tw`hover:bg-yellow-900 hover:bg-opacity-30`]
}

interface MissionWrapperProps {
  active: boolean;
  basecolor: 'blue' | 'yellow';
}

export const MissionWrapper = styled.div<MissionWrapperProps>`
    ${tw`p-3 rounded-lg transition-all duration-300`}
    ${({active, basecolor}) => active ? colorConfigs[basecolor][0] : colorConfigs[basecolor][1]}
`;