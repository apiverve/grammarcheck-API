# Grammar Check API

> Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the corrected text.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com)
[![Method](https://img.shields.io/badge/Method-POST-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/grammarcheck)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.GrammarCheck)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-grammarcheck/)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callGrammarCheckAPI() {
    try {
        const requestBody = {
    "text": "The the pig snorted when I saw it on the barn gate. I was a little mad becuase it woke up my pupppppy"
};

        const response = await fetch('https://api.apiverve.com/v1/grammarcheck', {
            method: 'POST',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callGrammarCheckAPI();
```

### Using cURL

```bash
curl -X POST "https://api.apiverve.com/v1/grammarcheck" \
  -H "x-api-key: YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "param": "value"
  }'
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/grammarcheck
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/grammarcheck) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.GrammarCheck
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.GrammarCheck) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-grammarcheck
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-grammarcheck/) | [**Package Code →**](./python/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:grammarcheck-api:1.0.0'
```

[**Package Code →**](./android/)

---

## Features

✅ **Multi-platform support** - Use the same API across Node.js, .NET, Python, Android, and browsers
✅ **Simple authentication** - Just add your API key in the request header
✅ **Comprehensive documentation** - Full examples and API reference available
✅ **Production-ready** - Used by developers worldwide

---

## Documentation

📚 **Full API Documentation:** [https://docs.apiverve.com/ref/grammarcheck](https://docs.apiverve.com/ref/grammarcheck)

---

## Use Cases

Common use cases for the Grammar Check API:

- ✅ Integration into web applications
- ✅ Mobile app development
- ✅ Data analysis and reporting
- ✅ Automation workflows
- ✅ Microservices architecture

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format
All responses are JSON with this structure:
```json
{
  "status": "ok",
  "data": { ... }
}
```

---

## Support & Community

- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2025 APIVerve. All rights reserved.
