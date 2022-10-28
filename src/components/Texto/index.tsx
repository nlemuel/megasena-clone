import { SpanComp } from "./styles";

type SpanProps = {
  description: string;
  margin?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  borderBot?: string;
  padding?: string;
}

export function Text({ description, margin, background, color, fontWeight, borderBot, padding, ...rest }: SpanProps) {
  return (
    <SpanComp margin={margin} background={background} color={color}
     fontWeight={fontWeight} borderBot={borderBot} padding={padding} {...rest}>
      {description}
    </SpanComp>
  );
}
