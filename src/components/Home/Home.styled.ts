import tw, {styled} from 'twin.macro'

const basecolor = {blue: [tw`bg-blue-900 bg-opacity-50 transform scale-105`, tw`hover:bg-blue-900 hover:bg-opacity-30`],
yellow:[tw`bg-yellow-900 bg-opacity-50 transform scale-105` , tw`hover:bg-yellow-900 hover:bg-opacity-30`]}

export const MissionWrapper = styled.div`
    ${tw`p-3 rounded-lg transition-all duration-300`}
    ${(props) => props.active ? basecolor[props.basecolor][0] : basecolor[props.basecolor][1]}
`;