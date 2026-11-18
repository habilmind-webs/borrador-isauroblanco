import {
  Award, BookOpen, BrainCircuit, Compass, Globe, GraduationCap, Heart, Lightbulb, Mic, Newspaper, Quote, School, Users, Video, Mail, Camera,
} from 'lucide-react';

const MAP = { Award, BookOpen, BrainCircuit, Compass, Globe, GraduationCap, Heart, Lightbulb, Mic, Newspaper, Quote, School, Users, Video, Mail, Camera };

export default function Icon({ name, className = 'h-6 w-6', ...rest }) {
  const C = MAP[name];
  return <C aria-hidden="true" focusable="false" className={className} strokeWidth={1.6} {...rest} />;
}
