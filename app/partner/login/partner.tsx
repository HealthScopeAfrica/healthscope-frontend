
import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useNavigation } from "react-router";
export function meta() {
  return [
    { title: "Partner Login" },
    { name: "description", content: "Login as a partner" },
  ];
}

export default function Partner() {
	const router = useNavigation()
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIsLogin] = useState(true)

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log("[v0] Login attempt with:", { email, password });
	};

	return (
		<div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4">
			<div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm p-8 md:p-12 lg:p-16 relative">
				{/* Close button */}
				<button
					className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
					aria-label="Close"
					onClick={() => window.location.replace("/") }
				>
					<X className="w-6 h-6" />
				</button>

				<div className="grid md:grid-cols-2 gap-12 lg:gap-20">
					{/* Left side - Information */}
					<div className="space-y-8">
						<div className="space-y-6">
							<h2 className="text-xl font-semibold text-gray-900">
								Main copy (polished):
							</h2>
							<p className="text-gray-700 leading-relaxed">
								Join a growing network of health organizations, NGOs,
								public health agencies, and professional bodies bringing
								expert voices to millions.
							</p>
							<p className="text-gray-700 leading-relaxed">
								With HealthScope, you can invite and manage contributors
								within your network, publish directly, and track the
								real-world impact of your work. Together, we can amplify
								trusted voices and combat health misinformation at
								scale.
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-gray-900">
								Supporting line (credibility):
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Inspired by leading global, African, and governmental
								health organizations.
							</p>
						</div>

						<Button
							onClick={() => setIsLogin(prev => !prev)}
							className="bg-[#5B7FFF] hover:bg-[#4A6EEE] text-white px-8 py-6 rounded-full text-base font-medium"
							size="lg"
						>
							Become a Partner
						</Button>
					</div>

					{/* Right side - Login form */}
					{isLogin ? (
						<div className="space-y-6">
							<h1 className="text-3xl font-bold text-gray-900">
								Partner Log in
							</h1>

							<form onSubmit={handleLogin} className="space-y-6">
								<div className="space-y-2">
									<Label
										htmlFor="email"
										className="text-base font-medium text-gray-900"
									>
										Email/Partner ID
									</Label>
									<Input
										id="email"
										type="text"
										placeholder="Enter your email/partner id"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="h-14 px-4 text-base border-gray-300 rounded-lg"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label
										htmlFor="password"
										className="text-base font-medium text-gray-900"
									>
										Password
									</Label>
									<div className="relative">
										<Input
											id="password"
											type={showPassword ? "text" : "password"}
											placeholder="Enter your password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="h-14 px-4 pr-12 text-base border-gray-300 rounded-lg"
											required
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
											aria-label={
												showPassword
													? "Hide password"
													: "Show password"
											}
										>
											{showPassword ? (
												<EyeOff className="w-5 h-5" />
											) : (
												<Eye className="w-5 h-5" />
											)}
										</button>
									</div>
								</div>

								<div>
									<a
										href="#"
										className="text-[#5B7FFF] hover:text-[#4A6EEE] text-base font-medium"
									>
										Forgot Password?
									</a>
								</div>

								<Button
									type="submit"
									className="w-full bg-[#5B7FFF] hover:bg-[#4A6EEE] text-white h-14 rounded-full text-base font-medium"
								>
									Log in
								</Button>
							</form>
						</div>
					) : (
						<div className="space-y-6">
							<h1 className="text-3xl font-bold text-gray-900">
								Partner Sign In
							</h1>

							<form onSubmit={handleLogin} className="space-y-6">
								<div className="space-y-2">
									<Label
										htmlFor="email"
										className="text-base font-medium text-gray-900"
									>
										Email/Partner ID
									</Label>
									<Input
										id="email"
										type="text"
										placeholder="Enter your email/partner id"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="h-14 px-4 text-base border-gray-300 rounded-lg"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label
										htmlFor="password"
										className="text-base font-medium text-gray-900"
									>
										Password
									</Label>
									<div className="relative">
										<Input
											id="password"
											type={showPassword ? "text" : "password"}
											placeholder="Enter your password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="h-14 px-4 pr-12 text-base border-gray-300 rounded-lg"
											required
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
											aria-label={
												showPassword
													? "Hide password"
													: "Show password"
											}
										>
											{showPassword ? (
												<EyeOff className="w-5 h-5" />
											) : (
												<Eye className="w-5 h-5" />
											)}
										</button>
									</div>
								</div>

								<div>
									<a
										href="#"
										className="text-[#5B7FFF] hover:text-[#4A6EEE] text-base font-medium"
									>
										Forgot Password?
									</a>
								</div>

								<Button
									type="submit"
									className="w-full bg-[#5B7FFF] hover:bg-[#4A6EEE] text-white h-14 rounded-full text-base font-medium"
								>
									Log in
								</Button>
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}