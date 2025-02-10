# Base Image
FROM debian:latest

# Install dependencies
RUN apt update && apt install -y curl unzip sudo

# Create the 'vscode' user (if needed)
RUN useradd -m vscode && echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Set working directory
RUN mkdir -p /app && chown -R vscode:vscode /app

# Set PATH for Bun installation
ENV BUN_INSTALL="/home/vscode/.bun"
ENV PATH="${BUN_INSTALL}/bin:${PATH}"

# Install Bun (ensure curl is installed first)
RUN curl -fsSL https://bun.sh/install | bash || (echo "Failed to install Bun" && exit 1)

WORKDIR /app

COPY . /app/
RUN chmod +x /app/.devcontainer/setup.sh

USER vscode
# Default command (keeps container running)
CMD ["sleep", "infinity"]
