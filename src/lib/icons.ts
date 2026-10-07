import {
  FileText, Globe, HeartPulse, ShieldCheck, Search, UserCheck,
  Monitor, TrendingUp, Building2, Hospital, Stethoscope, Building,
  Store, LayoutGrid, CheckCircle, ArrowRight, Phone, ArrowLeft,
  Menu, X, ChevronDown, ChevronRight, Mail, MapPin, Clock,
  Headphones, Users, Activity, Award, Target, Heart, Zap, Star,
  Cpu, BarChart3, ArrowUpRight, ArrowUp, AlertTriangle, RefreshCw,
  Syringe, Bug, Moon, AudioLines, PersonStanding, Sparkles, Smile,
  Scan, Siren, Gauge, Apple, Scissors, Home, HeartHandshake, Droplet,
  Brain, Radiation, Flower2, Ribbon, Eye, Bone, Ear, Microscope,
  Baby, Dumbbell, Feather, Footprints, MessageCircle, Wind, Camera,
  Hand, Flame, Waves, Video, Droplets,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const iconRegistry: Record<string, IconComponent> = {
  FileText, Globe, HeartPulse, ShieldCheck, Search, UserCheck,
  Monitor, TrendingUp, Building2, Hospital, Stethoscope, Building,
  Store, LayoutGrid, CheckCircle, ArrowRight, Phone, ArrowLeft,
  Menu, X, ChevronDown, ChevronRight, Mail, MapPin, Clock,
  Headphones, Users, Activity, Award, Target, Heart, Zap, Star,
  Cpu, BarChart3, ArrowUpRight, ArrowUp, AlertTriangle, RefreshCw,
  Syringe, Bug, Moon, AudioLines, PersonStanding, Sparkles, Smile,
  Scan, Siren, Gauge, Apple, Scissors, Home, HeartHandshake, Droplet,
  Brain, Radiation, Flower2, Ribbon, Eye, Bone, Ear, Microscope,
  Baby, Dumbbell, Feather, Footprints, MessageCircle, Wind, Camera,
  Hand, Flame, Waves, Video, Droplets,
};

export function getIcon(name: string): IconComponent {
  return iconRegistry[name] || FileText;
}
