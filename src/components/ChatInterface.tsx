import { useState, useEffect, useRef } from 'react';
import { 
  Send, Bot, User, Paperclip, Mic, 
  Code2, Building2, Landmark, 
  BarChart3, Scale, Search,
  FileText, Coins, Brain,
  MessageSquare, FileImage, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface InteractionOption {
  icon: typeof MessageSquare;
  title: string;
  prompt: string;
  category: 'communication' | 'analysis' | 'development' | 'legal';
}

const interactionOptions: InteractionOption[] = [
  {
    icon: Building2,
    title: 'Análisis de Terreno',
    prompt: 'Realicemos un análisis completo del terreno. Por favor, proporciona la ubicación y características principales.',
    category: 'analysis'
  },
  {
    icon: Code2,
    title: 'Desarrollo de Código',
    prompt: 'Listo para ayudarte con el desarrollo de código. ¿Qué funcionalidad necesitas implementar?',
    category: 'development'
  },
  {
    icon: Landmark,
    title: 'Desarrollo Inmobiliario',
    prompt: 'Exploremos las herramientas de desarrollo inmobiliario. ¿Qué aspecto te gustaría optimizar?',
    category: 'development'
  },
  {
    icon: Coins,
    title: 'Blockchain & Smart Contracts',
    prompt: 'Implementemos soluciones blockchain para tu proyecto inmobiliario. ¿Qué tipo de contrato inteligente necesitas?',
    category: 'development'
  },
  {
    icon: BarChart3,
    title: 'Análisis Financiero',
    prompt: 'Realicemos un análisis financiero detallado. ¿Qué métricas te gustaría evaluar?',
    category: 'analysis'
  },
  {
    icon: Search,
    title: 'Estudio de Mercado',
    prompt: 'Iniciemos un estudio de mercado exhaustivo. ¿Qué zona o segmento te interesa analizar?',
    category: 'analysis'
  },
  {
    icon: Scale,
    title: 'Asesoría Legal',
    prompt: 'Consultemos los aspectos legales de tu proyecto. ¿Qué dudas tienes sobre normativas o regulaciones?',
    category: 'legal'
  },
  {
    icon: FileText,
    title: 'Documentación Técnica',
    prompt: 'Generemos la documentación técnica necesaria. ¿Qué tipo de documento necesitas crear?',
    category: 'development'
  }
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hola, soy Conciencia0 (C0). Elige una opción de interacción o escribe tu consulta directamente.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (content: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleBotResponse = async (customResponse?: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);
    addMessage(
      customResponse || 'Estoy procesando tu mensaje. Como IA, estoy aquí para asistirte en el desarrollo inmobiliario y gestión de proyectos.',
      'bot'
    );
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setShowOptions(false);
    addMessage(userMessage, 'user');
    await handleBotResponse();
  };

  const handleOptionClick = async (option: InteractionOption) => {
    setShowOptions(false);
    addMessage(`Seleccioné: ${option.title}`, 'user');
    await handleBotResponse(option.prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const filteredOptions = selectedCategory
    ? interactionOptions.filter(option => option.category === selectedCategory)
    : interactionOptions;

  return (
    <div className="w-full mb-16">
      <Card className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
        {/* Chat Header */}
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 bg-primary">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </Avatar>
            <div>
              <h3 className="font-mono font-bold text-sm">Conciencia0 (C0)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {isTyping ? 'Escribiendo...' : 'AI Assistant'}
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => {
              setShowOptions(!showOptions);
              setSelectedCategory(null);
            }}
          >
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="h-[400px] p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <Avatar className={`h-8 w-8 ${
                  message.sender === 'user' 
                    ? 'bg-zinc-700 dark:bg-zinc-300' 
                    : 'bg-primary'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-white dark:text-zinc-900" />
                  ) : (
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  )}
                </Avatar>
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-zinc-100 dark:bg-zinc-800'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            ))}

            {/* Interaction Options */}
            {showOptions && (
              <div className="space-y-4 mt-4">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {['analysis', 'development', 'legal'].map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className="capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <Button
                        key={option.title}
                        variant="outline"
                        className="flex items-center gap-2 p-4 h-auto bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-zinc-800/80"
                        onClick={() => handleOptionClick(option)}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{option.title}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Chat Input */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mic className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1"
            />
            <Button 
              onClick={handleSend} 
              disabled={!input.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}