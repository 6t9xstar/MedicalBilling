import {
  FileText, Globe, HeartPulse, ShieldCheck, Search, UserCheck,
  Monitor, TrendingUp, Building2, Hospital, Stethoscope, Building,
  Store, LayoutGrid, CheckCircle, ArrowRight, Phone, ArrowLeft,
  Menu, X, ChevronDown, ChevronRight, Mail, MapPin, Clock,
  Headphones, Users, Activity, Award, Target, Heart, Zap, Star,
  Cpu, BarChart3, ArrowUpRight, ArrowUp, AlertTriangle, RefreshCw,
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
};

export function getIcon(name: string): IconComponent {
  return iconRegistry[name] || FileText;
}
