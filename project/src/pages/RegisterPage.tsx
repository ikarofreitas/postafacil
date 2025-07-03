import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Store, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { api } from '../services/api';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const businessCategories = [
  { value: 'food', label: 'Alimentação (Restaurante, Padaria, etc)' },
  { value: 'beauty', label: 'Beleza (Barbearia, Salão, etc)' },
  { value: 'retail', label: 'Varejo (Loja de Roupas, Calçados, etc)' },
  { value: 'services', label: 'Serviços (Consultoria, Agências, etc)' },
  { value: 'health', label: 'Saúde e Bem-Estar (Academia, Clínica, etc)' },
  { value: 'other', label: 'Outros' }
];

const regions = [
  { value: 'north', label: 'Norte' },
  { value: 'northeast', label: 'Nordeste' },
  { value: 'midwest', label: 'Centro-Oeste' },
  { value: 'southeast', label: 'Sudeste' },
  { value: 'south', label: 'Sul' }
];

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    businessName: '',
    category: '',
    region: ''
  });
  
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log('step atual:', step);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const prevStep = (e? : React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    setStep(1); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      toast.error('A senha deve ter pelo menos 8 caracteres');
      return;
    }
    try {
      setIsLoading(true);
      const data = await api.post('/users/customer', formData);
      setIsLoading(false);
      console.log(data);
      navigate('/dashboard')
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        const message = error.response.data.message || 'Este email já está em uso';
        toast.error(message);
      } else {
        toast.error('Erro inesperado ao criar conta');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 flex flex-col justify-center bg-gray-50">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {step === 1 ? 'Crie sua conta grátis' : 'Sobre seu negócio'}
          </h2>
          <p className="mt-2 text-gray-600">
            {step === 1 
              ? 'Experimente o PostaFácil gratuitamente por 7 dias' 
              : 'Estas informações nos ajudam a personalizar seu conteúdo'
            }
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            {step === 1 ? (
              <form className="space-y-6" onSubmit={nextStep}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome completo
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="********"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Mínimo de 8 caracteres
                  </p>
                </div>
                <div>
                  <Button type="submit" full>
                    Continuar
                  </Button>
                </div>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                    Nome do seu negócio
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Store className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Nome do seu negócio"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Categoria do negócio
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="block w-full py-3 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="" disabled>Selecione uma categoria</option>
                      {businessCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                    Região
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="region"
                      name="region"
                      required
                      value={formData.region}
                      onChange={handleChange}
                      className="block w-full pl-10 py-3 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="" disabled>Selecione sua região</option>
                      {regions.map((region) => (
                        <option key={region.value} value={region.value}>
                          {region.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    className="sm:flex-1"
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="sm:flex-1"
                  >
                    {isLoading ? 'Processando...' : 'Criar Conta'}
                  </Button>
                </div>
              </form>
            )}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Já tem uma conta?{' '}
                <Link to="/login" className="font-medium text-primary hover:text-primary-dark">
                  Faça login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;